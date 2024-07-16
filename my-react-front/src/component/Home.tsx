export const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <img src="/main.jpg" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="text-center mb-6">
          <h1 className="text-white text-6xl font-bold z-10 mb-4">
            스마트 팩토리
          </h1>
          <h1 className="text-white text-6xl font-bold z-10">디지털 트윈</h1>
        </div>
      </div>
    </div>
  );
};
