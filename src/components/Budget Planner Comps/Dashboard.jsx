const Dashboard = () => {
  return (
    <main className="bg-[#9bc8db] w-full h-full rounded-r-xl grid grid-cols-[32px_1fr_32px]">
      <div className="w-full h-full"></div>
      <section className="w-full h-full grid grid-rows-[32px_1fr_32px_5fr_32px_2fr_32px]">
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[1fr_64px_1fr_64px_1fr]">
          <div className="bg-green-100 w-full h-full rounded-xl"></div>
          <div className="w-full h-full"></div>
          <div className="bg-green-100 w-full h-full rounded-xl"></div>
          <div className="w-full h-full"></div>
          <div className="bg-green-100 w-full h-full rounded-xl"></div>
        </div>
        <div className="w-full h-full"></div>
        <div className="bg-green-100 w-full h-full rounded-xl"></div>
        <div className="w-full h-full"></div>
        <div className="bg-green-100 w-full h-full rounded-xl"></div>
        <div className="w-full h-full"></div>
      </section>
      <div className="w-full h-full"></div>
    </main>
  );
};

export default Dashboard;
