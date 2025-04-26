#include <cstdlib>
#include <vector>
#include "vulkan/vulkan_core.h"
#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>

#include <validation.h>

#ifndef MAIN_SHADER_GRAPHICS
#define MAIN_SHADER_GRAPHICS

constexpr uint32_t WIDTH = 800;
constexpr uint32_t HEIGHT = 600;

std::vector<char> readFile(const std::string& filename);

class HelloTriangleApplication {
public:
    void run();
    
private:
    GLFWwindow* window;
    VkInstance instance;

    VkDebugUtilsMessengerEXT debugMessenger;

    VkDevice device;
    VkPhysicalDevice physicalDevice = VK_NULL_HANDLE;

    VkQueue graphicsQueue;
    VkSurfaceKHR surface;
    VkQueue presentQueue;

    VkSwapchainKHR swapChain;
    std::vector<VkImage> swapChainImages;
    VkFormat swapChainImageFormat;
    VkExtent2D swapChainExtent;
    std::vector<VkImageView> swapChainImageViews;

    VkRenderPass renderPass;
    VkPipelineLayout pipelineLayout;
    VkPipeline graphicsPipeline;

    void createGraphicsPipeline();

    void createRenderPass();

    void createImageViews();

    void createSwapChain();

    void initWindow(); 

    void initVulkan(); 

    void mainLoop(); 

    void cleanup(); 

    void createSurface(); 

    void createLogicalDevice();

    void pickPhysicalDevice(); 

    std::vector<const char*> getRequiredExtensions(); 

    /* General object creation pattern (see 27 lines down):
     * * pointer to struct with creation info
     * * pointer to custom allocator callbacks
     * * pointer to variable that stores the handle of the object
     */
    void createInstance(); 

    void setupDebugMessenger(); 
};

#endif
