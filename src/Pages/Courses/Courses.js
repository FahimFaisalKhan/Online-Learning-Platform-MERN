import React, { useContext, useState } from "react";
import { Badge, BottomNavigation, Rating } from "react-daisyui";
import { Link, useLoaderData } from "react-router-dom";
import CourseDetailCard from "../../Components/CourseDetailCard/CourseDetailCard";
import RatingStar from "../../Components/Rating/RatingStar";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";
import { AuthContext } from "../../Contexts/UserContext/UserContext";

const Courses = () => {
  const { lightMode } = useContext(MyThemeContext);
  const { loading } = useContext(AuthContext);
  const courses = useLoaderData();
  const [currentlyDisplayingCourse, setCurrentlyDisplayingCourse] = useState();

  const text_bg_cls = lightMode
    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#d6bdab] to-[#a88690]"
    : "bg-clip-text text-transparent bg-gradient-to-r from-[#414141] to-[#000000]";

  console.log(loading);
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <section className="flex flex-col lg:flex-row lg:min-h-screen">
      <div className=" w-full lg:w-5/12 xl:w-3/12 relative">
        <aside className="hidden lg:block sticky top-0 bg-base-content w-full min-h-screen py-10 px-7">
          <div className={text_bg_cls}>
            <Link to={`/${currentlyDisplayingCourse?.id}`}>
              <h2 className="font-bold text-3xl hover:underline decoration-primary underline-offset-4">
                {currentlyDisplayingCourse?.name}
              </h2>
            </Link>

            <h6 className="text-start mt-8 text-xl underline decoration-double decoration-[#d6bdab] underline-offset-4 font-semibold">
              Features
            </h6>
            <div className="flex flex-col items-start mt-5 font-semibold gap-3">
              <Link to={`/${currentlyDisplayingCourse?.id}`}>
                <h6 className="hover:underline decoration-primary underline-offset-4">
                  Instructor -
                  <span className="text-base-300 ml-2">
                    {currentlyDisplayingCourse?.instructor}
                  </span>
                </h6>
              </Link>
              <Link to={`/${currentlyDisplayingCourse?.id}`}>
                <h6 className="hover:underline decoration-primary underline-offset-4">
                  Total Hours -
                  <span className="text-base-300 ml-2">
                    {currentlyDisplayingCourse?.time}
                  </span>
                </h6>
              </Link>
              <Link to={`/${currentlyDisplayingCourse?.id}`}>
                <h6 className="hover:underline decoration-primary underline-offset-4">
                  Chapters -
                  <span className="text-base-300 ml-2">
                    {currentlyDisplayingCourse?.chapters.length}
                  </span>
                </h6>
              </Link>
              <Link to={`/${currentlyDisplayingCourse?.id}`}>
                <h6 className="hover:underline decoration-primary underline-offset-4">
                  Price -
                  <span className="text-base-300 ml-2">
                    {currentlyDisplayingCourse?.price}
                  </span>
                </h6>
              </Link>
              <Link to={`/${currentlyDisplayingCourse?.id}`}>
                <RatingStar
                  rating={currentlyDisplayingCourse?.rating}
                  textColor={text_bg_cls}
                ></RatingStar>
              </Link>

              <Link to={`/${currentlyDisplayingCourse?.id}`}>
                <Badge
                  size="lg"
                  color="warning"
                  className="hover:bg-primary hover:text-base-300"
                >
                  {currentlyDisplayingCourse?.tag}
                </Badge>
              </Link>
            </div>
          </div>
        </aside>
        <aside className="lg:hidden bg-base-content w-full min-h-[50vh] py-10 px-7">
          <div className={text_bg_cls}>
            <h2 className="font-bold text-3xl hover:underline decoration-primary underline-offset-4">
              Jump into a course!
            </h2>

            {/* <h6 className="text-start mt-8 text-xl underline decoration-double decoration-[#d6bdab] underline-offset-4 font-semibold">
              Features
            </h6> */}
            <div className="flex flex-col items-start mt-5 font-semibold gap-3">
              {courses.map((course) => {
                return (
                  <Link to={`/${course.id}`}>
                    <h6 className="underline decoration-primary underline-offset-4">
                      {course.name}
                    </h6>
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
      <div className="grow ">
        {courses.map((course) => {
          const { id } = course;
          return (
            <CourseDetailCard
              course={course}
              key={id}
              handleCurrentlyDisplayingCourse={setCurrentlyDisplayingCourse}
            ></CourseDetailCard>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
