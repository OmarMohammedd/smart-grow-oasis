
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Upload, X, Check, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ status: string; message: string } | null>(null);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check if the file is an image
      if (!file.type.match('image.*')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive",
        });
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    setResult(null);
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    setProgress(0);
    
    // Simulate analysis process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          
          // Simulate random diagnosis results
          const conditions = [
            { status: "healthy", message: "Your plant appears healthy! No signs of disease detected." },
            { status: "warning", message: "Early signs of powdery mildew detected. Consider treating with a fungicide." },
            { status: "danger", message: "Leaf spot disease detected. Immediate treatment recommended." }
          ];
          
          const randomResult = conditions[Math.floor(Math.random() * conditions.length)];
          setResult(randomResult);
          
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div className="space-y-6">
      <Card className="border-dashed border-2 hover:border-garden-500 transition-colors cursor-pointer">
        <CardContent className="p-6">
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            className="hidden"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload" className="cursor-pointer block">
            {!preview ? (
              <div className="flex flex-col items-center justify-center py-6">
                <Upload className="h-12 w-12 text-gray-400 mb-2" />
                <p className="text-lg font-medium text-center">Drag and drop an image here or click to browse</p>
                <p className="text-sm text-gray-500 text-center mt-1">
                  Upload a clear photo of the plant leaf for analysis
                </p>
              </div>
            ) : (
              <div className="relative">
                <img 
                  src={preview} 
                  alt="Plant preview" 
                  className="max-h-80 rounded-md mx-auto object-contain"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemoveImage();
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            )}
          </label>
        </CardContent>
      </Card>

      {preview && !isAnalyzing && !result && (
        <Button 
          onClick={analyzeImage} 
          className="w-full bg-garden-600 hover:bg-garden-700"
        >
          Analyze Plant Image
        </Button>
      )}

      {isAnalyzing && (
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-center text-gray-500">Analyzing image... {progress}%</p>
        </div>
      )}

      {result && (
        <Card className={`border-l-4 ${
          result.status === 'healthy' ? 'border-l-green-500 bg-green-50' : 
          result.status === 'warning' ? 'border-l-yellow-500 bg-yellow-50' : 
          'border-l-red-500 bg-red-50'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-start">
              {result.status === 'healthy' ? (
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              ) : result.status === 'warning' ? (
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              )}
              <div>
                <h3 className={`font-medium ${
                  result.status === 'healthy' ? 'text-green-700' : 
                  result.status === 'warning' ? 'text-yellow-700' : 
                  'text-red-700'
                }`}>
                  {result.status === 'healthy' ? 'Healthy Plant' : 
                   result.status === 'warning' ? 'Minor Issues Detected' : 
                   'Serious Problem Detected'}
                </h3>
                <p className="text-sm mt-1">{result.message}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageUploader;
