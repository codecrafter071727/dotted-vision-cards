import { useState, useEffect } from "react";
import { motion } from "motion/react";
import AnimatedDots from "@/components/AnimatedDots";
import TeamMember from "@/components/TeamMember";

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Alex has over 15 years of experience in tech and leads our vision with passion and innovation.",
      imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3",
      socials: {
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        email: "alex@example.com",
        github: "https://github.com/"
      }
    },
    {
      name: "Sarah Williams",
      role: "Lead Designer",
      bio: "Sarah creates beautiful user experiences with her eye for detail and creative thinking.",
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3",
      socials: {
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        email: "sarah@example.com"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael brings technical expertise and strategic vision to lead our engineering team.",
      imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3",
      socials: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
        email: "michael@example.com"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      bio: "Emma develops our brand strategy and ensures our message reaches the right audience.",
      imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.0.3",
      socials: {
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        email: "emma@example.com"
      }
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "David has a talent for solving complex problems and building scalable solutions.",
      imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3",
      socials: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        email: "david@example.com"
      }
    },
    {
      name: "Olivia Patel",
      role: "UX Researcher",
      bio: "Olivia ensures our products meet real user needs through research and testing.",
      imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=961&auto=format&fit=crop&ixlib=rb-4.0.3",
      socials: {
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        email: "olivia@example.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedDots />
      
      {/* Enhanced purple gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-700/5 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 text-transparent bg-clip-text">
            Our Amazing Team
          </h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Meet the talented individuals who make our vision a reality through dedication, creativity, and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imgSrc={member.imgSrc}
              socials={member.socials}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-300">Join Our Team</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            We're always looking for talented individuals to join our growing team. Check out our open positions!
          </p>
          <a 
            href="#" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white font-medium inline-block hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>

      {/* Enhanced purple radial gradient effect */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          zIndex: 5
        }}
      />
    </div>
  );
};

export default TeamPage;
