export interface AppItem {
  id: string;
  slug: string;
  isReleased: boolean;
  status: 'released' | 'coming_soon' | 'in_development' | 'beta' | 'slot_available';
  name: string;
  category: {
    vi: string;
    en: string;
  };
  rating?: string;
  reviewsCount?: string;
  downloads?: string;
  version?: string;
  size?: string;
  osRequirement?: string;
  lastUpdated?: string;
  packageName?: string;
  googlePlayUrl: string; // Set to '#' by default for user to update
  githubUrl?: string;
  iconImage?: string;
  featureGraphic?: {
    vi: string;
    en: string;
  };
  screenshots?: {
    vi: string[];
    en: string[];
  };
  shortDescription: {
    vi: string;
    en: string;
  };
  fullDescription: {
    vi: string;
    en: string;
  };
  features: {
    vi: string[];
    en: string[];
  };
  whatsNew?: {
    vi: string;
    en: string;
  };
  accentColor: string;
}

export const appsData: AppItem[] = [
  {
    id: 'simple-otp',
    slug: 'simple-otp',
    isReleased: false,
    status: 'coming_soon',
    name: 'Simple OTP',
    category: {
      vi: 'Bảo mật & Xác thực 2FA',
      en: 'Security & 2FA Authenticator',
    },
    version: '0.0.1 (Sắp ra mắt)',
    size: '12.4 MB',
    osRequirement: 'Android 8.0 trở lên (API 26+) & iOS',
    lastUpdated: 'Tháng 9, 2026',
    packageName: 'vn.io.kd.simpleotp',
    googlePlayUrl: '#', // TODO: Thay bằng link Google Play chính thức khi publish
    githubUrl: 'https://github.com/kd-labs-io/simple-otp',
    iconImage: '/assets/simple-otp/icon.png',
    featureGraphic: {
      vi: '/assets/simple-otp/banners/vi/00_feature_graphic.png',
      en: '/assets/simple-otp/banners/en/00_feature_graphic.png',
    },
    screenshots: {
      vi: [
        '/assets/simple-otp/banners/vi/01_offline_security.png',
        '/assets/simple-otp/banners/vi/02_qr_scanner.png',
        '/assets/simple-otp/banners/vi/03_pet_academy.png',
        '/assets/simple-otp/banners/vi/04_encrypted_backup.png',
      ],
      en: [
        '/assets/simple-otp/banners/en/01_offline_security.png',
        '/assets/simple-otp/banners/en/02_qr_scanner.png',
        '/assets/simple-otp/banners/en/03_pet_academy.png',
        '/assets/simple-otp/banners/en/04_encrypted_backup.png',
      ],
    },
    shortDescription: {
      vi: 'Ứng dụng xác thực 2 lớp (2FA/OTP) 100% ngoại tuyến, bảo vệ bằng mã hóa phần cứng an toàn tuyệt đối, đồng hành cùng các trợ thủ ảo tương tác sống động.',
      en: 'High-security, 100% offline 2FA/OTP authenticator with hardware-backed encryption, paired with joyful interactive companion mascots.',
    },
    fullDescription: {
      vi: 'Simple OTP được xây dựng trên triết lý bảo mật tối thượng: an ninh chuẩn doanh nghiệp phải dễ tiếp cận, minh bạch và đem lại sự an tâm tuyệt đối. Ứng dụng hoạt động 100% offline không cần quyền Internet, khóa bí mật được lưu trữ trong két phần cứng (Android Keystore / iOS Keychain) với mã hóa AES-256-GCM. Đi kèm là hệ thống trợ thủ ảo Bé Khóa (Lock-bot) và các linh vật tương tác giúp việc bảo vệ tài khoản số trở nên gần gũi, thú vị.',
      en: 'Simple OTP is engineered on a fundamental security principle: enterprise-grade cryptographic security should feel accessible, transparent, and completely peaceful. The app operates 100% offline with zero network permissions. Master Vault Keys are guarded inside hardware enclaves (Android Keystore / iOS Keychain) encrypted via AES-256-GCM. Featuring the Bé Khóa (Lock-bot) companion mascot to make digital authentication approachable and delightful.',
    },
    features: {
      vi: [
        'Ngoại tuyến 100% (Zero-Network): Không cấp quyền Internet, 0 dữ liệu gửi ra ngoài',
        'Két mã hóa phần cứng: MVK sinh qua PBKDF2 (100.000 vòng) & AES-256-GCM',
        'Chuẩn bảo mật RFC 6238 (TOTP) & RFC 4226 (HOTP) hỗ trợ SHA-1, SHA-256, SHA-512',
        'Nhập mã đa kênh tiện lợi: Quét QR camera, đọc ảnh từ thư viện, tự động bắt link clipboard hoặc nhập tay',
        'Màn chắn quyền riêng tư: FLAG_SECURE chống chụp ảnh / quay lén màn hình',
        'Khóa sinh trắc học vân tay & khuôn mặt (Biometrics Auth)',
        'Trợ thủ ảo tương tác sống động: Bé Khóa, Cipher Cat, Byte Dog, Shield Bunny',
        'Sao lưu mã hóa mật khẩu an toàn định dạng tệp .simpleotp',
        'Mã nguồn mở độc lập MIT: Hoàn toàn minh bạch và có thể kiểm tra độc lập',
      ],
      en: [
        '100% Offline (Zero-Network Architecture): No internet permissions, 0 telemetry sent outwards',
        'Hardware-backed Vault Key: Derived via PBKDF2 (100k iterations) & AES-256-GCM',
        'RFC 6238 (TOTP) & RFC 4226 (HOTP) compliant with SHA-1, SHA-256, SHA-512 support',
        'Multi-channel ingestion: Live camera QR scanner, gallery photo decode, clipboard auto-detect, manual key',
        'Privacy Shield: System FLAG_SECURE prevents unauthorized screenshots or recording',
        'Biometric authentication with fingerprint & Face Unlock support',
        'Interactive companion mascots: Bé Khóa (Lock-bot), Cipher Cat, Byte Dog, Shield Bunny',
        'Encrypted password-protected backup and restore in .simpleotp format',
        'Open-Source under MIT: 100% transparent and independently auditable',
      ],
    },
    whatsNew: {
      vi: '• Chuẩn bị phát hành phiên bản 0.0.1 trên Google Play\n• Tích hợp trọn bộ 3 linh vật trợ thủ bảo mật\n• Kiến trúc Zero-Network đã hoàn thiện kiểm thử 100%',
      en: '• Preparing release for version 0.0.1 on Google Play\n• Integrated complete trio of interactive security mascots\n• Zero-Network architecture verified with 100% test coverage',
    },
    accentColor: '#F76B00',
  },
  {
    id: 'kanso-focus',
    slug: 'kanso-focus',
    isReleased: false,
    status: 'in_development',
    name: 'Kanso Focus',
    category: {
      vi: 'Năng suất & Phong cách sống',
      en: 'Productivity & Lifestyle',
    },
    version: '1.0.0-lab',
    size: '7.8 MB',
    osRequirement: 'Android 8.0+',
    lastUpdated: 'Dự án phòng Lab',
    packageName: 'com.kdlabs.kansofocus',
    googlePlayUrl: '#',
    shortDescription: {
      vi: 'Đồng hồ đếm giờ Pomodoro tối giản kết hợp âm thanh thiên nhiên, giúp bạn bước vào trạng thái Deep Work mà không bị xao nhãng.',
      en: 'Minimalist Pomodoro timer paired with ambient nature soundscapes, designed to cultivate deep work without cognitive noise.',
    },
    fullDescription: {
      vi: 'Dự án đang trong phòng nghiên cứu phát triển tiếp theo của KD Labs.',
      en: 'Active laboratory project at KD Labs.',
    },
    features: {
      vi: [
        'Đồng hồ Pomodoro với chu kỳ tuỳ chỉnh',
        'Âm thanh nền thiên nhiên chất lượng cao',
        'Hoạt động 100% Offline không quảng cáo',
      ],
      en: [
        'Customizable Pomodoro timer intervals',
        'High-quality ambient soundscapes',
        '100% Offline with zero ads',
      ],
    },
    accentColor: '#EA580C',
  },
  {
    id: 'next-project-slot',
    slug: 'next-project-slot',
    isReleased: false,
    status: 'slot_available',
    name: 'Ứng dụng mới (Slot trống)',
    category: {
      vi: 'Dành cho dự án tiếp theo của bạn',
      en: 'Reserved for your upcoming app',
    },
    version: 'Upcoming',
    googlePlayUrl: '#',
    shortDescription: {
      vi: 'Slot dự phòng đã được thiết kế sẵn. Bạn có thể dễ dàng bổ sung thông tin ứng dụng mới vào src/data/apps.ts.',
      en: 'Pre-configured reserve slot. You can easily add your next mobile application to src/data/apps.ts.',
    },
    fullDescription: {
      vi: 'Khung hiển thị mô-đun cho nhà phát triển KD Labs.',
      en: 'Modular showcase slot for KD Labs developer.',
    },
    features: {
      vi: [
        'Tự động sinh trang chi tiết ứng dụng',
        'Tích hợp nút tải Google Play',
        'Tương thích đa ngôn ngữ EN / VI',
      ],
      en: [
        'Automatically creates dedicated app route',
        'Instant Google Play download button support',
        'Full bilingual EN / VI compatibility',
      ],
    },
    accentColor: '#9A3412',
  },
];
