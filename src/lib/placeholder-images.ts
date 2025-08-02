// Utility function to generate placeholder images with text
// These are just placeholder URLs - in a real app, replace with actual project images

type ProjectImage = {
  taskManager: string;
  weatherDashboard: string;
  blogCms: string;
  ecommerce: string;
  portfolio: string;
  recipeFinder: string;
  [key: string]: string;
};

export const projectImages: ProjectImage = {
  taskManager: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Task+Manager',
  weatherDashboard: 'https://placehold.co/600x400/10B981/FFFFFF?text=Weather+Dashboard',
  blogCms: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Blog+CMS',
  ecommerce: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=E-commerce',
  portfolio: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Portfolio',
  recipeFinder: 'https://placehold.co/600x400/EC4899/FFFFFF?text=Recipe+Finder',
};

// Function to get a placeholder image by project name
export function getProjectImage(projectName: string): string {
  const key = projectName.toLowerCase().replace(/\s+/g, '');
  return projectImages[key] || projectImages.taskManager;
}
