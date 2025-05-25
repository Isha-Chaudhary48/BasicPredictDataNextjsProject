async function predictGender(name: string) {
  const response = await fetch(`https://api.genderize.io/?name=${name}`);
  return response.json();
}
async function predictAge(name: string) {
  const response = await fetch(`https://api.agify.io?name=${name}`);
  return response.json();
}
async function predictNationality(name: string) {
  const response = await fetch(`https://api.nationalize.io?name=${name}`);
  return response.json();
}
interface predictionParam {
  params: {
    name: string;
  };
}

export default async function Name({ params }: predictionParam) {
  const ageData = predictAge(params.name);
  const nationality = predictNationality(params.name);
  const genderData = predictGender(params.name);
  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    nationality,
  ]);

  return (
    <>
      <div className="flex flex-col  items-center  justify-center h-[100vh] w-[100vw] bg-black">
        <div className="w-[90vw] ">
          <div className="border border-black p-6 gap-6 flex flex-col  items-center  justify-center rounded-md bg-white text-xl  ">
            <h1 className="text-xl text-blue-600 font-semibold">
              Personal Information
            </h1>
            <div>
              <div>
                <span className="font-semibold">Name :</span> {params.name}
              </div>
              <div>
                {" "}
                <span className="font-semibold">Age :</span> {age?.age}
              </div>
              <div>
                {" "}
                <span className="font-semibold">Gender :</span> {gender?.gender}
              </div>
              <div>
                {" "}
                <span className="font-semibold">Nationality:</span>{" "}
                {country?.country[0]?.country_id}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
