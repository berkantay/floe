import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-black/70 px-6 py-4 text-white shadow-lg backdrop-blur-lg">
      {/* Left Section: Name and SVG */}
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-2">
        {/* Replace with your SVG */}

        <motion.img
          src="/floe.svg"
          alt="logo"
          className="mx-auto h-8 w-8"
          variants={itemVariants}
          style={{ filter: "invert(1)" }}
        />
        <Link href="/" className="text-lg font-bold">
          Floe
        </Link>
      </motion.div>

      {/* Center Section: How? Link */}
      <motion.div
        variants={itemVariants}
        className="absolute inset-x-0 text-center">
        <Link
          href="#how"
          className="text-lg font-bold text-white transition-all duration-150 hover:text-yellow-200">
          How?
        </Link>
      </motion.div>
    </motion.nav>
  );
}
