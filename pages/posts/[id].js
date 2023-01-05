import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';


export async function getStaticProps({ params }) {
//fetch necessary data for the blogpost using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

//export async function called getStaticPaths
//function returns possible values for the id
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

  export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>
          {postData.title}
          </h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div className={utilStyles.servedData} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }