
const teamMembers = [
    { name: "Ruby Ramirez", role: "Role", image: "src/svg/ai/Ruby.svg",width: 180, height: 180},
    { name: "Javier Escribano", role: "Role", image: "src/svg/ai/Javier.svg",width: 180, height: 180 },
    { name: "Francisca Reategui", role: "Role", image: "src/svg/ai/Francisca.svg",width: 180, height: 180 },
    { name: "Raul Rubina", role: "Role", image: "src/svg/ai/Raul.svg",width: 180, height: 180 },
  ];
  
  export default function Team(){
    
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-pink-400 text-3xl font-bold mb-8">Meet the team</h2>
          <div className="flex justify-center space-x-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.image} alt={member.name} className="rounded-full mx-auto mb-4 w-32 h-32"/>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
