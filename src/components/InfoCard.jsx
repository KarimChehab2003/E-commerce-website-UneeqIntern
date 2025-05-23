function InfoCard({ name, desc, icon }) {
    return (
        <div className="flex flex-col justify-center items-center  bg-white rounded-2xl p-6 shadow-md hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 text-center space-y-3">
            {
                icon ? (
                    <span className="text-[#4f46e5] text-4xl">{icon}</span>
                ) : (
                    <p className="capitalize font-light text-sm">team member</p>
                )
            }
            <h2 className="font-bold text-2xl capitalize">{name}</h2>
            <p className="light-color">{desc}</p>
        </div>
    );
}

export default InfoCard;