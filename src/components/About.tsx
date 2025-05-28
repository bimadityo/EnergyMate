import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { BotMessageSquare, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function About() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-5xl mx-auto p-6"
    >
      <motion.div 
        variants={imageVariants}
        className="mb-8 rounded-lg overflow-hidden shadow-lg"
      >
        <img
          src="/indoor.jpg"
          alt="Smart Home Energy"
          className="w-full h-64 object-cover"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-green-700">
              Apa Itu EnergyMate?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              EnergyMate adalah aplikasi web inovatif yang memanfaatkan <strong>machine learning</strong> dan <strong>chatbot cerdas</strong> untuk membantu rumah tangga mengoptimalkan penggunaan energi. Dengan analisis data konsumsi energi, EnergyMate memberikan rekomendasi personalisasi untuk mengurangi pemborosan.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Fitur Unggulan */}
      <motion.div 
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-6 mb-8"
      >
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    transition: { 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 2 
                    } 
                  }}
                >
                  <Zap className="text-amber-400"/>
                </motion.div>
                Prediksi Konsumsi Energi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Model ML kami menganalisis pola penggunaan energi dan memprediksi kebutuhan masa depan dengan akurasi tinggi.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    transition: { 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 2 
                    } 
                  }}
                >
                  <BotMessageSquare className="text-green-500"/>
                </motion.div>
                Chatbot Hemat Energi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Chatbot berbasis AI siap menjawab pertanyaan dan memberikan tips penghematan energi secara real-time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};