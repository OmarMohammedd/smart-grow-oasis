
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, AlertTriangle, BellOff } from 'lucide-react';

const Diagnosis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="gradient-text font-bold mb-4">Plant Health Diagnosis</h1>
            <p className="text-xl text-gray-600">
              Upload a clear photo of your plant leaves to identify potential diseases and get treatment recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>AI Plant Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageUploader />
                </CardContent>
              </Card>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-garden-100 text-garden-600 mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Take a Clear Photo</h3>
                        <p className="text-gray-600 text-sm">
                          Capture a well-lit image of the plant leaf showing any discoloration, spots, or unusual growth.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-garden-100 text-garden-600 mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Upload for Analysis</h3>
                        <p className="text-gray-600 text-sm">
                          Upload the image using our tool above. Our AI system will process the image.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-garden-100 text-garden-600 mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Review Results</h3>
                        <p className="text-gray-600 text-sm">
                          The system will identify potential issues and provide care recommendations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-garden-100 text-garden-600 mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Take Action</h3>
                        <p className="text-gray-600 text-sm">
                          Follow the recommended treatment plan to nurse your plant back to health.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Common Plant Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="diseases">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="diseases">Diseases</TabsTrigger>
                      <TabsTrigger value="pests">Pests</TabsTrigger>
                    </TabsList>
                    <TabsContent value="diseases" className="space-y-4 mt-4">
                      <div className="border rounded-md p-3">
                        <h3 className="font-medium mb-1">Powdery Mildew</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          White powdery spots on leaves and stems.
                        </p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <span className="font-medium">Treatment:</span> Remove affected leaves and apply fungicide.
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h3 className="font-medium mb-1">Black Spot</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Black or brown spots with yellow halos on leaves.
                        </p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <span className="font-medium">Treatment:</span> Remove infected leaves and apply fungicide.
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h3 className="font-medium mb-1">Leaf Blight</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Brown patches that spread across leaves.
                        </p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <span className="font-medium">Treatment:</span> Prune affected areas and improve air circulation.
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h3 className="font-medium mb-1">Root Rot</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Wilting despite moist soil, yellowing leaves.
                        </p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <span className="font-medium">Treatment:</span> Repot with fresh soil and reduce watering.
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="pests" className="space-y-4 mt-4">
                      <div className="border rounded-md p-3">
                        <h3 className="font-medium mb-1">Aphids</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Small insects that cluster on new growth and undersides of leaves.
                        </p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <span className="font-medium">Treatment:</span> Spray with insecticidal soap or neem oil.
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h3 className="font-medium mb-1">Spider Mites</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Tiny pests that cause stippling on leaves and fine webbing.
                        </p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <span className="font-medium">Treatment:</span> Increase humidity and apply miticide.
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h3 className="font-medium mb-1">Mealybugs</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          White, cottony insects found on stems and leaf joints.
                        </p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <span className="font-medium">Treatment:</span> Remove with alcohol-dipped cotton swab.
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h3 className="font-medium mb-1">Scale Insects</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Small bumps on stems and leaves that don't move.
                        </p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <span className="font-medium">Treatment:</span> Scrape off and apply horticultural oil.
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Diagnoses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Healthy Tomato Plant</p>
                      <p className="text-xs text-gray-500">Today, 10:23 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 mt-1">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Mild Powdery Mildew on Basil</p>
                      <p className="text-xs text-gray-500">Yesterday, 4:15 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 mt-1">
                      <BellOff className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">No recent diagnoses</p>
                      <p className="text-xs text-gray-400">Upload a plant image above</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Diagnosis;
