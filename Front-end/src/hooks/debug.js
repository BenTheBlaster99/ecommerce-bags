// Debug utility to verify application bootstrapping

console.log('🔍 Debug utility loaded');

export const debugAppStart = () => {

  console.log('✅ Application bootstrap check:');

  console.log('- JavaScript is running');

  console.log('- Module system is working');

  

  // Check if DOM is accessible

  const rootElement = document.getElementById('root');

  console.log('- DOM access:', rootElement ? 'working' : 'not working');

  

  return true;

}