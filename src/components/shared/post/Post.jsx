import Image from 'next/image';
import PropTypes from 'prop-types';

import Tags from 'components/shared/tags';

import CopyIcon from './images/copy.url.svg';

const copyToClipboard = async (article) => await navigator.clipboard.writeText(article);

const Post = ({ title, tags, article }) => (
  <div className="container drop-shadow-[0px 0px 100px rgba(0, 0, 0, 0.05)] rounded-[30px] bg-white px-[100px] pb-[100px]">
    <div className="pt-[60px] text-center">
      <button onClick={() => copyToClipboard(article)}>
        <Image src={CopyIcon} width={40} height={40} />
      </button>
      <h2 className="text-lg font-bold">{title}</h2>
      <Tags tags={tags} />
    </div>
    <article>{article}</article>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  article: PropTypes.string.isRequired,
};
export default Post;
