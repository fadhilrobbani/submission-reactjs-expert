import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function HomePage() {
  const { authUser } = useSelector((states) => states);
  let firstRun = useRef(true);
  useEffect(() => {
    if (firstRun) {
      console.log(authUser);
      firstRun = false;
    }
  }, []);
  return (
    <div className=" text-slate-200  justify-center items-center p-10 pb-20 flex flex-col gap-7">
      <div className="bg-slate-600 w-3/4 p-5 h-full rounded-lg shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam
        imos suscipit totam voluptate reprehenderit dolor. Autem. Dolor magnam
        velit sequi itaque voluptates, iste perferendis doloribus aperiam eum
        sunt neque. Nostrum quisquam qui nemo distinctio in est a. Incidunt
        molestias aspernatur ad commodi qui similique cumque esse. lorem*20
      </div>
      <div className="bg-slate-600 w-3/4 p-5 h-full rounded-lg shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam
        imos suscipit totam voluptate reprehenderit dolor. Autem. Dolor magnam
        velit sequi itaque voluptates, iste perferendis doloribus aperiam eum
        sunt neque. Nostrum quisquam qui nemo distinctio in est a. Incidunt
        molestias aspernatur ad commodi qui similique cumque esse. lorem*20
      </div>
      <div className="bg-slate-600 w-3/4 p-5 h-full rounded-lg shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam
        imos suscipit totam voluptate reprehenderit dolor. Autem. Dolor magnam
        velit sequi itaque voluptates, iste perferendis doloribus aperiam eum
        sunt neque. Nostrum quisquam qui nemo distinctio in est a. Incidunt
        molestias aspernatur ad commodi qui similique cumque esse. lorem*20
      </div>
    </div>
  );
}

export default HomePage;
