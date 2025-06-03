# Geliştirme Kılavuzu

Bu belge, VIMS projesine katkıda bulunmak için izlenmesi gereken kuralları ve standartları açıklar.

## Git İş Akışı

### Dallama Stratejisi

| Dal Tipi         | Yaşam Süresi | Amaç                                  | Birleştirme Hedefi     |
| ---------------- | ------------ | ------------------------------------- | ---------------------- |
| `main` / `trunk` | Kalıcı       | Üretim kodu                           | —                      |
| `release/*`      | Kısa–Orta    | Sürüm hazırlığı, sıcak düzeltme akışı | `main`                 |
| `hotfix/*`       | En Kısa      | Kritik prod hataları                  | `release` & `main`     |
| `feature/*`      | Kısa         | Bir kullanıcı değeri                  | `main` (rebase-squash) |

* Feature dalları en fazla 48 saat yaşamalıdır
* Her dal bir iş öğesi (Jira issue) ile ilişkilendirilmelidir
* Dal isimlendirmesi şu şekilde olmalıdır: `feature/VIMS-123-ozellik-adi`

### Commit Standartları

Bu proje [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) standardını takip eder. Her commit şu formatta olmalıdır:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Örnek:
```
feat(auth): refresh token rotası eklendi

JWT refresh token rotası eklendi.

VIMS-123
```

Commit tipleri:
- `feat`: Yeni bir özellik
- `fix`: Hata düzeltmesi
- `docs`: Sadece dokümantasyon değişiklikleri
- `style`: Kod davranışını değiştirmeyen stil değişiklikleri
- `refactor`: Kod davranışını değiştirmeyen kod yeniden düzenlemeleri
- `perf`: Performans iyileştirmeleri
- `test`: Test dosyaları ekleme veya düzenleme
- `chore`: Derleme sistemi veya bağımlılıklar gibi dış değişiklikler

Her commit imzalanmalıdır (GPG veya SSH-sig).

### Pull Request Süreci

1. PR başlığı Conventional Commits formatında olmalıdır
2. PR açıklaması şablona uygun doldurulmalıdır
3. En az 2 onay gereklidir (biri kod sahibi, diğeri bağımsız göz)
4. Tüm CI kontrolleri başarılı olmalıdır
5. PR boyutu maksimum 1000 satır olmalıdır
6. Squash-and-merge stratejisi kullanılacaktır

## Kod Standartları

- ESLint ve Prettier kurallarına uyulmalıdır
- Jest ile birim testleri yazılmalıdır, kod kapsama oranı %80'in üzerinde olmalıdır
- TypeScript tip güvenliği sağlanmalıdır

## CI/CD Pipeline

Proje şu aşamaları içeren bir CI/CD pipeline kullanır:
1. Linting
2. Birim testleri
3. Derleme
4. Entegrasyon testleri
5. Güvenlik taraması

Her aşama geçilmeden PR birleştirilemez.

## Sürümleme

Proje SemVer standardını kullanır:
- Major: Geriye uyumlu olmayan değişiklikler
- Minor: Geriye uyumlu yeni özellikler
- Patch: Geriye uyumlu hata düzeltmeleri

## Geliştirme Ortamının Kurulumu

1. Repoyu klonlayın
2. Bağımlılıkları yükleyin: `npm install`
3. Geliştirme sunucusunu başlatın: `npm run dev`

## Faydalı Komutlar

- `npm run lint`: Kod kalitesini kontrol eder
- `npm run test`: Testleri çalıştırır
- `npm run build`: Üretim sürümünü derler 