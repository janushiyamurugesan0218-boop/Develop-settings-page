document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const notificationsToggle = document.getElementById('notifications-toggle');
    const privacySelect = document.getElementById('privacy-select');
    const saveBtn = document.getElementById('save-settings-btn');
    const toast = document.getElementById('save-toast');

    // 1. Load saved configurations from LocalStorage on page load
    const savedTheme = localStorage.getItem('theme');
    const savedNotifications = localStorage.getItem('notifications');
    const savedPrivacy = localStorage.getItem('privacy');

    // Apply saved theme configurations
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.checked = true;
    }

    // Apply saved notification toggle configuration
    if (savedNotifications !== null) {
        notificationsToggle.checked = savedNotifications === 'true';
    }

    // Apply saved privacy choice
    if (savedPrivacy !== null) {
        privacySelect.value = savedPrivacy;
    }

    // 2. Real-time theme change handling
    darkModeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    });

    // 3. Save options on button click
    saveBtn.addEventListener('click', () => {
        // Determine theme state
        const themeState = darkModeToggle.checked ? 'dark' : 'light';
        
        // Save current configuration values to localStorage
        localStorage.setItem('theme', themeState);
        localStorage.setItem('notifications', notificationsToggle.checked);
        localStorage.setItem('privacy', privacySelect.value);

        // Debug logging confirmation
        console.log("Settings Saved:", {
            theme: themeState,
            notifications: notificationsToggle.checked,
            privacy: privacySelect.value
        });

        // Trigger visual success text notification
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2500);
    });
});