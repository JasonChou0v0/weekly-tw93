import rss from '@astrojs/rss';

let allPosts = import.meta.glob('./posts/*.md', { eager: true });
let posts = Object.values(allPosts);
posts = posts.sort((a, b) => {
  return (
    parseInt(b.url.split('/posts/')[1].split('-')[0]) -
    parseInt(a.url.split('/posts/')[1].split('-')[0])
  );
});

//只保留15，当前太多了
posts.splice(10);

export const get = () =>
  rss({
    title: 'Jason 碎碎念',
    description: '记录 JasonChou 的日常生活',
    site: 'https://jasonchou.vercel.app/',
    customData: `<image><url>https://gw.alipayobjects.com/zos/k/qv/coffee-2-icon.png</url></image>`,
    items: posts.map((item) => {
      const url = item.url;
      const oldTitle = url.split('/posts/')[1];
      const title =
        '第' + oldTitle.split('-')[0] + '期 - ' + oldTitle.split('-')[1];
      return {
        link: url,
        title,
        description: item.compiledContent(),
        pubDate: item.frontmatter.date,
      };
    }),
  });
