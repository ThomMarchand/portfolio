export default function HeaderNavbar() {
  return (
    <div className="md:mx-auto">
      <h1 className="md:text-2xl lg:text-3xl xl:text-5xl font-bold">
        Thomas Marchand
      </h1>

      <div className="text-xs font-medium xs:flex sm:text-sm lg:text-lg xl:text-3xl">
        <p>Developpeur</p>
        <p className="ml-3 lg:ml-4 xl:ml-6">JavaScript</p>
      </div>

      <p className="text-xs sm:text-sm font-medium lg:text-lg xl:text-3xl">
        Spé. Back-end
      </p>
    </div>
  );
}
