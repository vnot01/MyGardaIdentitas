document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const watermarkText = document.getElementById('watermarkText');
    const opacityInput = document.getElementById('opacity');
    const fontSizeInput = document.getElementById('fontSize');
    const fontSizeDisplay = document.getElementById('fontSizeDisplay');
    const processBtn = document.getElementById('processBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const placeholder = document.querySelector('.placeholder');

    // Footer Logic
    const extensionVersion = document.getElementById('extensionVersion');
    const supportBtn = document.getElementById('supportBtn');

    try {
        const manifest = chrome.runtime.getManifest();
        if (extensionVersion) {
            extensionVersion.textContent = manifest.version;
        }
    } catch (e) {
        console.error('Error fetching manifest:', e);
    }

    if (supportBtn) {
        supportBtn.addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://saweria.co/vnot01' });
        });
    }

    let uploadedImage = null;
    canvas.style.display = 'none';

    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = new Image();
                img.onload = function() {
                    uploadedImage = img;
                    drawWatermark();
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    processBtn.addEventListener('click', drawWatermark);
    
    watermarkText.addEventListener('input', () => { if(uploadedImage) drawWatermark(); });
    opacityInput.addEventListener('input', () => { if(uploadedImage) drawWatermark(); });
    fontSizeInput.addEventListener('input', (e) => { 
        fontSizeDisplay.textContent = e.target.value + 'px';
        if(uploadedImage) drawWatermark(); 
    });

    function drawWatermark() {
        if (!uploadedImage) {
            return;
        }

        canvas.width = uploadedImage.width;
        canvas.height = uploadedImage.height;
        
        ctx.drawImage(uploadedImage, 0, 0);

        const text = watermarkText.value.toUpperCase();
        const fontSize = parseInt(fontSizeInput.value, 10);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.fillStyle = `rgba(255, 0, 0, ${opacityInput.value})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.save();
        const angle = -30 * Math.PI / 180;
        const spacingX = fontSize * 10;
        const spacingY = fontSize * 6;

        for (let x = -canvas.width; x < canvas.width * 2; x += spacingX) {
            for (let y = -canvas.height; y < canvas.height * 2; y += spacingY) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);
                ctx.fillText(text, 0, 0);
                ctx.restore();
            }
        }
        
        ctx.restore();
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(-15 * Math.PI / 180);
        
        const centerFontSize = Math.max(fontSize * 2, 24); 
        ctx.font = `900 ${centerFontSize}px Arial`;
        ctx.fillStyle = `rgba(0, 0, 0, 0.3)`;
        ctx.fillText(text, 5, 5);
        ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
        ctx.fillText(text, 0, 0);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.strokeText(text, 0, 0);
        
        ctx.restore();

        canvas.style.display = 'block';
        if(placeholder) placeholder.style.display = 'none';
        downloadBtn.style.display = 'inline-block';
    }

    downloadBtn.addEventListener('click', function() {
        if (!uploadedImage) return;
        
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        const link = document.createElement('a');
        link.download = 'GardaIdentitas-' + Date.now() + '.jpg';
        link.href = dataUrl;
        link.click();
    });
});
