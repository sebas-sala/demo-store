interface Props {
  params: Promise<{ tag: string }>;
}

export default async function Page({ params }: Readonly<Props>) {
  const tag = (await params).tag;

  return <div>{tag}</div>;
}
