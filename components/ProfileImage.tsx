"use client";

export default function ProfileImage() {
  return (
    <div className="relative mb-8">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-2xl blur-2xl" />
      <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black">
        <img 
          src="/MyPhoto.jpeg" 
          alt="Profile" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500 text-center p-8"><span>Add your photo as<br/>/public/MyPhoto.jpeg</span></div>';
            }
          }}
        />
      </div>
    </div>
  );
}
