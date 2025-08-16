// Modern Dashboard Application JavaScript

// Application data
const appData = {
  "user": {
    "name": "Alexandra Chen",
    "email": "alexandra.chen@company.com",
    "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    "role": "Product Manager",
    "joinDate": "2023-01-15",
    "lastActive": "2024-08-16T21:30:00"
  },
  "stats": [
    {"label": "Total Projects", "value": "24", "change": "+12%", "icon": "📊"},
    {"label": "Active Tasks", "value": "156", "change": "+5%", "icon": "✅"},
    {"label": "Files Uploaded", "value": "89", "change": "+23%", "icon": "📁"},
    {"label": "Messages", "value": "1,247", "change": "+8%", "icon": "💬"}
  ],
  "recentActivity": [
    {"action": "Uploaded quarterly report.pdf", "time": "2 hours ago", "type": "upload"},
    {"action": "Completed project review", "time": "4 hours ago", "type": "task"},
    {"action": "Updated profile information", "time": "1 day ago", "type": "profile"},
    {"action": "Added new team member", "time": "2 days ago", "type": "team"}
  ],
  "newsArticles": [
    {
      "id": 1,
      "title": "Latest Industry Trends in Technology",
      "summary": "Exploring the newest developments in artificial intelligence and machine learning applications across various industries.",
      "category": "Technology",
      "date": "2024-08-16",
      "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      "author": "Tech Insights"
    },
    {
      "id": 2,
      "title": "Remote Work Best Practices",
      "summary": "Essential strategies for maintaining productivity and team collaboration in distributed work environments.",
      "category": "Business",
      "date": "2024-08-15",
      "image": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
      "author": "Business Weekly"
    },
    {
      "id": 3,
      "title": "Sustainable Business Innovation",
      "summary": "How companies are implementing eco-friendly practices while maintaining growth and profitability.",
      "category": "Sustainability",
      "date": "2024-08-14",
      "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      "author": "Green Business"
    }
  ],
  "tasks": [
    {"id": 1, "text": "Review Q3 marketing campaigns", "completed": false, "priority": "high"},
    {"id": 2, "text": "Schedule team meeting for next week", "completed": true, "priority": "medium"},
    {"id": 3, "text": "Update project documentation", "completed": false, "priority": "low"},
    {"id": 4, "text": "Prepare presentation for stakeholders", "completed": false, "priority": "high"}
  ],
  "files": [
    {"name": "Project_Proposal.pdf", "size": "2.4 MB", "type": "pdf", "date": "2024-08-16"},
    {"name": "Team_Photo.jpg", "size": "1.8 MB", "type": "image", "date": "2024-08-15"},
    {"name": "Budget_Report.xlsx", "size": "456 KB", "type": "spreadsheet", "date": "2024-08-14"}
  ],
  "chartData": {
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    "values": [65, 78, 85, 92, 88, 95]
  }
};

// Application state
let currentTheme = localStorage.getItem('theme') || 'light';
let isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initializing...');
    
    initializeTheme();
    initializeSidebar();
    initializeNavigation();
    initializeWidgets();
    initializeDashboard();
    initializeNewsPage();
    initializeFileManager();
    initializeForms();
    initializeModals();
    initializeSearch();
    
    // Load saved preferences
    loadUserPreferences();
    
    console.log('Application initialized successfully');
});

// Theme switching - Fixed implementation
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }
    
    // Apply saved theme
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    console.log('Theme initialized:', currentTheme);
    
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        
        console.log('Theme switched to:', currentTheme);
    });
}

// Sidebar functionality - Fixed implementation
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (!sidebarToggle || !sidebar || !mainContent) {
        console.error('Sidebar elements not found');
        return;
    }
    
    sidebarToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        isSidebarCollapsed = !isSidebarCollapsed;
        
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('show');
        } else {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }
        
        localStorage.setItem('sidebarCollapsed', isSidebarCollapsed);
        console.log('Sidebar toggled:', isSidebarCollapsed);
    });
    
    // Handle responsive sidebar
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('collapsed');
            mainContent.classList.remove('expanded');
        } else {
            sidebar.classList.remove('show');
            if (isSidebarCollapsed) {
                sidebar.classList.add('collapsed');
                mainContent.classList.add('expanded');
            }
        }
    });
    
    console.log('Sidebar initialized');
}

// Navigation functionality - Fixed implementation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    
    if (navItems.length === 0) {
        console.error('Navigation items not found');
        return;
    }
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetPage = this.getAttribute('data-page');
            console.log('Navigating to:', targetPage);
            
            if (!targetPage) {
                console.error('No data-page attribute found');
                return;
            }
            
            // Update active navigation item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show target page
            pages.forEach(page => page.classList.remove('active'));
            const targetPageElement = document.getElementById(targetPage);
            
            if (targetPageElement) {
                targetPageElement.classList.add('active');
                console.log('Successfully navigated to:', targetPage);
            } else {
                console.error('Target page element not found:', targetPage);
            }
            
            // Save current page
            localStorage.setItem('currentPage', targetPage);
            
            // Close sidebar on mobile after navigation
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.remove('show');
            }
        });
    });
    
    // Load saved page
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
        const targetNav = document.querySelector(`[data-page="${savedPage}"]`);
        const targetPage = document.getElementById(savedPage);
        
        if (targetNav && targetPage) {
            navItems.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            targetNav.classList.add('active');
            targetPage.classList.add('active');
            console.log('Restored saved page:', savedPage);
        }
    }
    
    console.log('Navigation initialized');
}

// Modal functionality - Fixed implementation
function initializeModals() {
    const notificationsBtn = document.getElementById('notifications');
    const notificationModal = document.getElementById('notificationModal');
    const closeNotificationModal = document.getElementById('closeNotificationModal');
    
    if (!notificationsBtn || !notificationModal || !closeNotificationModal) {
        console.error('Modal elements not found');
        return;
    }
    
    notificationsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        notificationModal.classList.remove('hidden');
        console.log('Notifications modal opened');
    });
    
    closeNotificationModal.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        notificationModal.classList.add('hidden');
        console.log('Notifications modal closed');
    });
    
    // Close modal when clicking outside
    notificationModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
            console.log('Notifications modal closed (clicked outside)');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !notificationModal.classList.contains('hidden')) {
            notificationModal.classList.add('hidden');
            console.log('Notifications modal closed (Escape key)');
        }
    });
    
    console.log('Modals initialized');
}

// Search functionality - Fixed implementation
function initializeSearch() {
    const searchInput = document.getElementById('globalSearch');
    
    if (!searchInput) {
        console.error('Search input not found');
        return;
    }
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            clearSearchResults();
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value.toLowerCase().trim();
            if (query.length >= 2) {
                performSearch(query);
            }
        }
    });
    
    console.log('Search initialized');
}

function performSearch(query) {
    const results = [];
    
    // Search in news articles
    appData.newsArticles.forEach(article => {
        if (article.title.toLowerCase().includes(query) || 
            article.summary.toLowerCase().includes(query) ||
            article.category.toLowerCase().includes(query)) {
            results.push({
                type: 'news',
                title: article.title,
                description: article.summary,
                page: 'news'
            });
        }
    });
    
    // Search in tasks
    appData.tasks.forEach(task => {
        if (task.text.toLowerCase().includes(query)) {
            results.push({
                type: 'task',
                title: task.text,
                description: `Priority: ${task.priority}`,
                page: 'dashboard'
            });
        }
    });
    
    // Search in files
    appData.files.forEach(file => {
        if (file.name.toLowerCase().includes(query)) {
            results.push({
                type: 'file',
                title: file.name,
                description: `${file.size} • ${file.type}`,
                page: 'files'
            });
        }
    });
    
    console.log(`Search for "${query}" found ${results.length} results:`, results);
    displaySearchResults(results);
}

function displaySearchResults(results) {
    // Show search results in console for now
    if (results.length === 0) {
        console.log('No search results found');
    } else {
        console.log('Search results:', results);
        alert(`Found ${results.length} results for your search. Check console for details.`);
    }
}

function clearSearchResults() {
    // Clear any displayed search results
}

// Widget drag and drop functionality
function initializeWidgets() {
    const widgets = document.querySelectorAll('.widget');
    const widgetsGrid = document.getElementById('widgetsGrid');
    
    if (!widgetsGrid) {
        console.error('Widgets grid not found');
        return;
    }
    
    widgets.forEach(widget => {
        widget.draggable = true;
        
        widget.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.getAttribute('data-widget'));
            this.classList.add('dragging');
            console.log('Started dragging widget:', this.getAttribute('data-widget'));
        });
        
        widget.addEventListener('dragend', function() {
            this.classList.remove('dragging');
            console.log('Finished dragging widget');
        });
    });
    
    widgetsGrid.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    widgetsGrid.addEventListener('drop', function(e) {
        e.preventDefault();
        const draggedWidget = document.querySelector('.widget.dragging');
        if (!draggedWidget) return;
        
        const afterElement = getDragAfterElement(this, e.clientY);
        
        if (afterElement == null) {
            this.appendChild(draggedWidget);
        } else {
            this.insertBefore(draggedWidget, afterElement);
        }
        
        saveWidgetOrder();
        console.log('Widget order saved');
    });
    
    console.log('Widgets initialized');
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.widget:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Dashboard initialization
function initializeDashboard() {
    populateStats();
    populateActivity();
    populateTasks();
    initializeChart();
    initializeQuickUpload();
    console.log('Dashboard initialized');
}

function populateStats() {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;
    
    statsGrid.innerHTML = '';
    
    appData.stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <div class="stat-label">${stat.label}</div>
            <div class="stat-value">${stat.value}</div>
            <div class="stat-change">${stat.change}</div>
        `;
        statsGrid.appendChild(statItem);
    });
}

function populateActivity() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;
    
    activityList.innerHTML = '';
    
    appData.recentActivity.forEach(activity => {
        const activityItem = document.createElement('li');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-icon ${activity.type}">
                ${getActivityIcon(activity.type)}
            </div>
            <div class="activity-content">
                <p class="activity-text">${activity.action}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        `;
        activityList.appendChild(activityItem);
    });
}

function getActivityIcon(type) {
    const icons = {
        upload: '📁',
        task: '✅',
        profile: '👤',
        team: '👥'
    };
    return icons[type] || '📝';
}

function populateTasks() {
    const tasksList = document.getElementById('tasksList');
    if (!tasksList) return;
    
    tasksList.innerHTML = '';
    
    appData.tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div class="task-checkbox ${task.completed ? 'completed' : ''}" data-task-id="${task.id}"></div>
            <p class="task-text ${task.completed ? 'completed' : ''}">${task.text}</p>
            <span class="task-priority ${task.priority}">${task.priority}</span>
        `;
        tasksList.appendChild(taskItem);
    });
    
    // Add task completion functionality
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            const taskId = parseInt(this.getAttribute('data-task-id'));
            const task = appData.tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
                populateTasks();
                console.log('Task toggled:', task.text);
            }
        });
    });
}

function initializeChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: appData.chartData.labels,
            datasets: [{
                label: 'Performance',
                data: appData.chartData.values,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

function initializeQuickUpload() {
    const uploadArea = document.getElementById('quickUploadArea');
    if (!uploadArea) return;
    
    uploadArea.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.click();
        
        input.addEventListener('change', function() {
            if (this.files.length > 0) {
                handleFileUpload(Array.from(this.files));
            }
        });
    });
    
    // Drag and drop functionality
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', function() {
        this.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            handleFileUpload(files);
        }
    });
}

// News page initialization
function initializeNewsPage() {
    populateNews();
    initializeNewsFilter();
    console.log('News page initialized');
}

function populateNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = '';
    
    appData.newsArticles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="news-image">
            <div class="news-content">
                <span class="news-category">${article.category}</span>
                <h3 class="news-title">${article.title}</h3>
                <p class="news-summary">${article.summary}</p>
                <div class="news-meta">
                    <span>By ${article.author}</span>
                    <span>${formatDate(article.date)}</span>
                </div>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

function initializeNewsFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;
        const newsCards = document.querySelectorAll('.news-card');
        
        newsCards.forEach(card => {
            const category = card.querySelector('.news-category').textContent;
            if (selectedCategory === '' || category === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        console.log('News filtered by category:', selectedCategory);
    });
}

// File manager initialization
function initializeFileManager() {
    populateFiles();
    initializeDropZone();
    console.log('File manager initialized');
}

function populateFiles() {
    const filesList = document.getElementById('filesList');
    if (!filesList) return;
    
    filesList.innerHTML = '';
    
    appData.files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-icon">${getFileIcon(file.type)}</div>
            <h4 class="file-name">${file.name}</h4>
            <div class="file-meta">
                <div>${file.size}</div>
                <div>${formatDate(file.date)}</div>
            </div>
        `;
        filesList.appendChild(fileItem);
    });
}

function getFileIcon(type) {
    const icons = {
        pdf: '📄',
        image: '🖼️',
        spreadsheet: '📊',
        document: '📝'
    };
    return icons[type] || '📄';
}

function initializeDropZone() {
    const dropZone = document.getElementById('dropZone');
    const browseBtn = document.getElementById('browseBtn');
    const fileInput = document.getElementById('fileInput');
    
    if (!dropZone || !browseBtn || !fileInput) return;
    
    browseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        fileInput.click();
    });
    
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            handleFileUpload(Array.from(this.files));
        }
    });
    
    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });
    
    dropZone.addEventListener('dragleave', function() {
        this.classList.remove('dragover');
    });
    
    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            handleFileUpload(files);
        }
    });
}

function handleFileUpload(files) {
    const uploadProgress = document.getElementById('uploadProgress');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (!uploadProgress || !progressFill || !progressText) return;
    
    uploadProgress.classList.add('show');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                uploadProgress.classList.remove('show');
                
                // Add files to the files list
                files.forEach(file => {
                    appData.files.unshift({
                        name: file.name,
                        size: formatFileSize(file.size),
                        type: getFileTypeFromName(file.name),
                        date: new Date().toISOString().split('T')[0]
                    });
                });
                
                populateFiles();
                console.log(`Uploaded ${files.length} files`);
            }, 1000);
        }
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
    }, 200);
}

// Form handling
function initializeForms() {
    const contactForm = document.getElementById('contactForm');
    const feedbackForm = document.getElementById('feedbackForm');
    const profileForm = document.getElementById('profileForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileSubmit);
    }
    
    // Add real-time validation
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.addEventListener('blur', validateField);
        control.addEventListener('input', clearFieldError);
    });
    
    console.log('Forms initialized');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Form submitted successfully!');
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        console.log('Form submitted successfully');
    }, 2000);
}

function handleProfileSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Saving...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Profile updated successfully!');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        console.log('Profile updated successfully');
    }, 1500);
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    if (isRequired && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = 'var(--color-error)';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.style.color = 'var(--color-error)';
    errorElement.style.fontSize = 'var(--font-size-xs)';
    errorElement.style.marginTop = 'var(--space-4)';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatFileSize(bytes) {
    const sizes = ['B', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 B';
    
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

function getFileTypeFromName(filename) {
    const extension = filename.split('.').pop().toLowerCase();
    const typeMap = {
        'pdf': 'pdf',
        'jpg': 'image',
        'jpeg': 'image',
        'png': 'image',
        'gif': 'image',
        'xlsx': 'spreadsheet',
        'xls': 'spreadsheet',
        'doc': 'document',
        'docx': 'document',
        'txt': 'document'
    };
    return typeMap[extension] || 'document';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Save and load user preferences
function saveWidgetOrder() {
    const widgets = Array.from(document.querySelectorAll('.widget'));
    const order = widgets.map(widget => widget.getAttribute('data-widget'));
    localStorage.setItem('widgetOrder', JSON.stringify(order));
}

function loadUserPreferences() {
    // Load sidebar state
    if (isSidebarCollapsed && window.innerWidth > 768) {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');
        if (sidebar && mainContent) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        }
    }
    
    // Load widget order
    const savedWidgetOrder = localStorage.getItem('widgetOrder');
    if (savedWidgetOrder) {
        const order = JSON.parse(savedWidgetOrder);
        const widgetsGrid = document.getElementById('widgetsGrid');
        if (!widgetsGrid) return;
        
        const widgets = {};
        
        // Store widgets by their data-widget attribute
        Array.from(widgetsGrid.children).forEach(widget => {
            const key = widget.getAttribute('data-widget');
            if (key) {
                widgets[key] = widget;
            }
        });
        
        // Clear and reorder
        widgetsGrid.innerHTML = '';
        order.forEach(key => {
            if (widgets[key]) {
                widgetsGrid.appendChild(widgets[key]);
            }
        });
        
        // Add any widgets that weren't in the saved order
        Object.keys(widgets).forEach(key => {
            if (!order.includes(key)) {
                widgetsGrid.appendChild(widgets[key]);
            }
        });
        
        console.log('Widget order restored');
    }
    
    console.log('User preferences loaded');
}