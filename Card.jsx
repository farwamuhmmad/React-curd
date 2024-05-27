const Card = ({ data, loading, error }) => {
  console.log(data, loading, error);

  if (loading) {
    return <h1>loading.....</h1>;
  }
  if (error !== null) {
    return <h1>Something went wrong please refresh it</h1>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-11">
      {data.map((value) => (
        <div key={value.id} className="flex max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href={value.link}>
            <img className="h-56 rounded-t-lg " src={value.image} alt="" />
          </a>
          <div className="p-5 ">
            <a href={value.link}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
            </a>
            <p className="h-16 mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{value.description}</p>
            <a href={value.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
