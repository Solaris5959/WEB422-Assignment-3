import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`https://good-cyan-moose-veil.cyclic.app/api/listings/${id}`);

  if (isLoading) {
    return null;
  }

  if (error || !data) {
    return <Error statusCode={404} />;
  }

  console.log(data);

  return (
    <>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </>
  );
}
