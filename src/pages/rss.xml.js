import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { t } from "@utils/constants";

export async function GET(context) {
	const posts = await getCollection('post');
	return rss({
		title: t("site.name"),
		description: t("site.title"),
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/post/${post.slug}/`,
		})),
	});
}
