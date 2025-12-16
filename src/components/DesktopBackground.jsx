import { motion } from "framer-motion";

const codeSnippets = [
  {
    code: `const Component = () => {\n  return <div>Hello World</div>;\n};`,
    language: "React",
    x: 10,
    y: 20,
    delay: 0,
  },
  {
    code: `interface User {\n  name: string;\n  age: number;\n}`,
    language: "TypeScript",
    x: 70,
    y: 15,
    delay: 0.5,
  },
  {
    code: `def get_user(user_id):\n    return User.objects.get(id=user_id)`,
    language: "Python",
    x: 20,
    y: 60,
    delay: 1,
  },
  {
    code: `class UserView(APIView):\n    def get(self, request):\n        return Response({})`,
    language: "Django",
    x: 80,
    y: 55,
    delay: 1.5,
  },
  {
    code: `import { useState } from 'react';\nconst [count, setCount] = useState(0);`,
    language: "React",
    x: 50,
    y: 35,
    delay: 2,
  },
  {
    code: `type Props = {\n  title: string;\n  onClick: () => void;\n};`,
    language: "TypeScript",
    x: 35,
    y: 75,
    delay: 2.5,
  },
];

const CodeSnippet = ({ snippet }) => {
  return (
    <motion.div
      className="absolute opacity-10 hover:opacity-20 transition-opacity duration-300"
      style={{
        left: `${snippet.x}%`,
        top: `${snippet.y}%`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.1, 0.15, 0.1],
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 8,
        delay: snippet.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="bg-black-200 bg-opacity-50 rounded-lg p-3 backdrop-blur-sm border border-[#915eff] border-opacity-20">
        <div className="text-[#915eff] text-xs font-semibold mb-1">
          {snippet.language}
        </div>
        <pre className="text-white text-[10px] leading-tight font-mono">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </motion.div>
  );
};

const DesktopBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-primary via-black-200 to-primary">
      <div className="absolute inset-0">
        {codeSnippets.map((snippet, index) => (
          <CodeSnippet key={index} snippet={snippet} />
        ))}
      </div>
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary opacity-50" />
    </div>
  );
};

export default DesktopBackground;

