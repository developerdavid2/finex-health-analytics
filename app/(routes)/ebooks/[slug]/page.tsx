import EbookDetailsClient from "@/components/sections/ebooks/ebook-id/ebook-details-client";
import { ebooksData } from "@/constants/ebooks-page-data/ebooks-data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EbookDetailsPage({ params }: Props) {
  const { slug } = await params;
  const ebook = ebooksData.find((e) => e.slug === slug);

  if (!ebook) notFound();

  return <EbookDetailsClient ebook={ebook} />;
}
