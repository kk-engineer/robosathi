document.addEventListener('DOMContentLoaded', function() {
    // Select both block and inline equations
    const equations = document.querySelectorAll('.katex-display, .katex:not(.katex-display .katex)');

    equations.forEach(eq => {
        // Create the button
        const button = document.createElement('button');
        button.className = 'copy-tex-button';
        button.textContent = 'Copy';

        // Tag inline equations for specific CSS
        if (!eq.classList.contains('katex-display')) {
            button.classList.add('copy-inline');
        }

        eq.appendChild(button);

        let timer;

        // Show button on hover
        eq.addEventListener('mouseenter', () => {
            clearTimeout(timer);
            button.style.display = 'flex';
        });

        // Hide button with a 300ms grace period to prevent "vanishing"
        eq.addEventListener('mouseleave', () => {
            timer = setTimeout(() => {
                button.style.display = 'none';
            }, 300);
        });

        // If mouse enters the button, cancel the hide timer
        button.addEventListener('mouseenter', () => {
            clearTimeout(timer);
        });

        // Copy Logic
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const annotation = eq.querySelector('annotation');
            if (annotation) {
                const texSource = annotation.textContent;
                navigator.clipboard.writeText(texSource).then(() => {
                    button.textContent = 'Copied!';
                    button.classList.add('copied');

                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                });
            }
        });
    });
});