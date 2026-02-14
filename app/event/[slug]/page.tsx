import EventDetails from "@/components/EventDetails";
import { Suspense } from "react";

// Make sure params is treated as a Promise
const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // Await the params directly
  const { slug } = await params;

  return (
    <main>
      {/* This Suspense boundary will catch the dynamic data fetching 
          happening inside <EventDetails /> 
      */}
      <Suspense fallback={<div>Loading event details...</div>}>
        <EventDetails slug={slug} />
      </Suspense>
    </main>
  );
};

export default EventDetailsPage;
