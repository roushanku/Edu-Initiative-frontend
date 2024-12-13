import TeacherCard from "./Home/TutorCard";

const TopTeachers = () => {
  return (
    <>
      <div className="py-16 px-4 max-w-6xl mx-auto ">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Meet Our Top Teachers
        </h2>
        <p className="text-lg text-gray-500 text-center mb-12">
          Discover the best educators ready to guide you on your learning
          journey.
        </p>
        <div className="flex flex-row gap-4 justify-center">
          <TeacherCard
            tutorName={"Ratnakar Gautam"}
            expertise={"4"}
            feesPerHour={20000}
            rating={5}
            imageUrl={
              "https://estaticos-cdn.prensaiberica.es/clip/de440c9d-21dd-4bc4-ab02-13b0e96ea2de_source-aspect-ratio_default_0.jpg"
            }
            description={"Best teacher in the world"}
          />
          <TeacherCard
            tutorName={"Ratnakar Gautam"}
            expertise={"4"}
            feesPerHour={20000}
            rating={5}
            imageUrl={
              "https://estaticos-cdn.prensaiberica.es/clip/de440c9d-21dd-4bc4-ab02-13b0e96ea2de_source-aspect-ratio_default_0.jpg"
            }
            description={"Best teacher in the world"}
          />
          <TeacherCard
            tutorName={"Ratnakar Gautam"}
            expertise={"4"}
            feesPerHour={20000}
            rating={5}
            imageUrl={
              "https://estaticos-cdn.prensaiberica.es/clip/de440c9d-21dd-4bc4-ab02-13b0e96ea2de_source-aspect-ratio_default_0.jpg"
            }
            description={"Best teacher in the world"}
          />
          <TeacherCard
            tutorName={"Ratnakar Gautam"}
            expertise={"4"}
            feesPerHour={20000}
            rating={5}
            imageUrl={
              "https://estaticos-cdn.prensaiberica.es/clip/de440c9d-21dd-4bc4-ab02-13b0e96ea2de_source-aspect-ratio_default_0.jpg"
            }
            description={"Best teacher in the world"}
          />
        </div>
      </div>
    </>
  );
};

export default TopTeachers;
