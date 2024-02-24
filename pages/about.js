import Link from "next/link";
import Card from "react-bootstrap/Card";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
    try {
      const res = await fetch("https://good-cyan-moose-veil.cyclic.app/api/listings/10006546"); // Ribeira Charming Duplex listing
      const listing = await res.json()
  
      return { 
        props: { listing } 
        }
    } catch (err) {
      console.log(err)
    }
  }

export default function About(listing) {
    return (
      <div>
        <PageHeader text="About the Developer: Connor McDonald" />
        <Card>
          <Card.Body>
            <p>
                Hi there, I am Connor. I'm currently taking enrolled in the CPA program at Seneca.

                <br />
                <br />
                
                I was born in Australia back in 2001, and have been in Canada since 2012.
            
                <br />
                <br />

                One listing that interest me is{` `}
                <Link href={`/listing/${listing.listing._id}`} passHref>
                     "Ribeira Charming Duplex"
                </Link>

                {` `}Listing in Porto, Portugal.
            </p>
          </Card.Body>
          {/* ListingDetails component showing specific listing details */}
          <ListingDetails listing={listing.listing} />
        </Card>
      </div>
    );
}
  