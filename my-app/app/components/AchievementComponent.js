
const AchievementComponent = ({title , description}) => {
        return (
            <div className="flex flex-col bg-white rounded-2xl px-5 h-48  w-80  justify-center items-center">
               <h1 className="text-customblack text-5xl pt-5 mb-4 ">
                {title}
               </h1>
               <p className="text-customblack text-xl text-center ">
               {description}
               </p>
            </div>
        ) ;
}
export default AchievementComponent ;