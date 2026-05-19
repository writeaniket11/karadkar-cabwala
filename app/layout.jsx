import "./globals.css";

export const metadata = {
  title: "Shree Siddhivinayak Jewellery | Premium Jewellery Wholesaler in Karad",
  description:
    "Premium gold jewellery, imitation jewellery, new designs, and wholesale jewellery collections in Karad.",
  openGraph: {
    title: "Shree Siddhivinayak Jewellery",
    description:
      "Luxury jewellery catalogue with WhatsApp enquiries for retailers and customers.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
