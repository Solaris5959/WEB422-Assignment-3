import useSWR from "swr";
import { useState, useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // Replace `(Your Cyclic App)` with your actual API endpoint
  const { data, error } = useSWR(`https://good-cyan-moose-veil.cyclic.app/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  // Pagination handlers
  const previous = () => setPage(prev => prev > 1 ? prev - 1 : 1);
  const next = () => setPage(prev => prev + 1);

  // Error handling or loading state can be added here

  return (
    <div>
      <PageHeader text="Browse Listings: Sorted by Number of Ratings" />
      <Accordion>
        {pageData.map(listing => (
          <Accordion.Item eventKey={listing._id} key={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
}