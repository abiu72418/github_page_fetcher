document.getElementById('lookup-button').addEventListener('click', function() {
    const statusElement = document.getElementById('github-status');
    statusElement.textContent = 'Looking up GitHub status...';

    // Simulate a lookup
    setTimeout(() => {
        const success = Math.random() > 0.5; // Randomly succeed or fail
        if (success) {
            statusElement.textContent = 'GitHub status: All systems operational.';
        } else {
            statusElement.textContent = 'GitHub status: Service unavailable.';
        }
    }, 2000);
});