import axios from 'axios';
import { useQuery } from 'react-query';

const getPhotos = async () => {
  const { data } = await axios({
    url: 'https://jsonplaceholder.typicode.com/photos',
    method: 'get',
  });
  return data;
};

const Index = () => {
  const { status, data, error } = useQuery('photos', getPhotos);
  if (status === 'Loading' || error) {
    console.log(status, error);
  }
  console.log(data);
  return (
    <div>
      {status === 'loading' ? (
        <div>Loading ...</div>
      ) : status === 'error' ? (
        <div>{error.message}</div>
      ) : (
        data.map((photo) => <div>{photo.title}</div>)
      )}
    </div>
  );
};

Index.getInitialProps = async () => {
  return { data: '' };
};
export default Index;
