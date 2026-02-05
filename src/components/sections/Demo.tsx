import { useState } from 'react';
import { Upload, Mic, FileText, Sparkles, Loader2, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

type Step = 'upload' | 'details' | 'preview';

export function Demo() {
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    dates: '',
    message: '',
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setTimeout(() => setCurrentStep('details'), 500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsComplete(true);
      setCurrentStep('preview');
    }, 3000);
  };

  const resetDemo = () => {
    setCurrentStep('upload');
    setIsComplete(false);
    setUploadedImage(null);
    setFormData({ name: '', dates: '', message: '' });
  };

  return (
    <Section id="demo" className="bg-gradient-to-b from-cream-50 to-forest-50 dark:from-charcoal-950 dark:to-charcoal-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
              Interactive Demo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-6">
            Try Memorial Video Generator
          </h2>
          <p className="text-xl text-charcoal-600 dark:text-cream-300 max-w-3xl mx-auto">
            Experience how easy it is to create a beautiful tribute in just a few simple steps.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              {['upload', 'details', 'preview'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep === step
                        ? 'bg-forest-600 text-white scale-110'
                        : index < ['upload', 'details', 'preview'].indexOf(currentStep)
                        ? 'bg-forest-400 text-white'
                        : 'bg-charcoal-200 dark:bg-charcoal-700 text-charcoal-500'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < 2 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all ${
                        index < ['upload', 'details', 'preview'].indexOf(currentStep)
                          ? 'bg-forest-400'
                          : 'bg-charcoal-200 dark:bg-charcoal-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card hover={false} className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {currentStep === 'upload' && (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-4">
                    Upload a Cherished Photo
                  </h3>

                  <label className="block">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="border-3 border-dashed border-charcoal-300 dark:border-charcoal-600 rounded-xl p-12 text-center cursor-pointer hover:border-forest-500 dark:hover:border-forest-400 transition-all hover:bg-forest-50 dark:hover:bg-forest-900/10">
                      <Upload className="w-16 h-16 mx-auto mb-4 text-charcoal-400 dark:text-charcoal-500" />
                      <p className="text-lg font-medium text-charcoal-700 dark:text-cream-200 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-charcoal-500 dark:text-cream-400">
                        PNG, JPG or GIF (max. 10MB)
                      </p>
                    </div>
                  </label>

                  {uploadedImage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6"
                    >
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg"
                      />
                    </motion.div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <div className="flex-1 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                      <div className="flex items-center gap-3">
                        <Mic className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        <div>
                          <p className="font-medium text-charcoal-900 dark:text-cream-50">Voice Recording</p>
                          <p className="text-sm text-charcoal-600 dark:text-cream-300">Available in next step</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-forest-50 dark:bg-forest-900/20 border border-forest-200 dark:border-forest-800">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-forest-600 dark:text-forest-400" />
                        <div>
                          <p className="font-medium text-charcoal-900 dark:text-cream-50">Custom Text</p>
                          <p className="text-sm text-charcoal-600 dark:text-cream-300">Add your message</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-charcoal-900 dark:text-cream-50 mb-6">
                    Add Personal Details
                  </h3>

                  {uploadedImage && (
                    <div className="flex items-center gap-4 p-4 bg-forest-50 dark:bg-forest-900/20 rounded-lg">
                      <img
                        src={uploadedImage}
                        alt="Preview"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex items-center gap-2 text-forest-700 dark:text-forest-300">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Photo uploaded successfully</span>
                      </div>
                    </div>
                  )}

                  <Input
                    label="Full Name"
                    placeholder="Enter the name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />

                  <Input
                    label="Important Dates"
                    placeholder="e.g., 1950 - 2024"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  />

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-2">
                      Personal Message
                    </label>
                    <textarea
                      placeholder="Share a meaningful memory or message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 border-charcoal-200 dark:border-charcoal-700"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep('upload')}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleGenerate}
                      disabled={!formData.name || !formData.dates}
                      className="flex-1"
                    >
                      Generate Preview
                      <Sparkles className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 'preview' && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {isGenerating ? (
                    <div className="text-center py-12">
                      <Loader2 className="w-16 h-16 mx-auto mb-6 text-forest-600 dark:text-forest-400 animate-spin" />
                      <h3 className="text-2xl font-bold text-charcoal-900 dark:text-cream-50 mb-3">
                        Creating Your Memorial Video
                      </h3>
                      <p className="text-charcoal-600 dark:text-cream-300">
                        Our AI is carefully crafting your tribute...
                      </p>
                    </div>
                  ) : isComplete ? (
                    <div className="space-y-6">
                      <div className="text-center">
                        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-forest-600 dark:text-forest-400" />
                        <h3 className="text-2xl font-bold text-charcoal-900 dark:text-cream-50 mb-3">
                          Your Memorial Video Preview
                        </h3>
                      </div>

                      <div className="bg-gradient-to-br from-forest-900 to-charcoal-900 rounded-xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

                        {uploadedImage && (
                          <img
                            src={uploadedImage}
                            alt="Preview"
                            className="w-64 h-64 object-cover rounded-lg mx-auto mb-6 shadow-2xl relative z-10"
                          />
                        )}

                        <div className="relative z-10 text-white space-y-3">
                          <h4 className="text-3xl font-bold">{formData.name}</h4>
                          <p className="text-xl text-cream-200">{formData.dates}</p>
                          {formData.message && (
                            <p className="text-lg italic text-cream-300 max-w-2xl mx-auto mt-6">
                              "{formData.message}"
                            </p>
                          )}
                        </div>

                        <div className="absolute bottom-4 right-4 flex items-center gap-2 text-cream-400 text-sm z-10">
                          <ImageIcon className="w-4 h-4" />
                          <span>Preview Mode</span>
                        </div>
                      </div>

                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                        <p className="text-center text-charcoal-700 dark:text-cream-200">
                          <span className="font-semibold">This is a demo preview.</span> The actual video will include
                          smooth transitions, music, voice narration, and professional effects.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="outline" onClick={resetDemo} className="flex-1">
                          Try Again
                        </Button>
                        <Button onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })} className="flex-1">
                          Get Full Access
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
