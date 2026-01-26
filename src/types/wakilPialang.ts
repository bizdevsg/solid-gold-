export interface WakilPialang {
  id: number;
  nama: string;
  nomorIzinWPB: string;
  status: 'Aktif' | 'Tidak Aktif';
  kota: string;
  slug: string;
  telepon?: string;
  email?: string;
  alamat?: string;
}

export const dummyWakilPialang: WakilPialang[] = [
  {
    id: 1,
    nama: 'Budi Santoso',
    nomorIzinWPB: 'WPB-001/SGB/2023',
    status: 'Aktif',
    kota: 'Jakarta',
    slug: 'budi-santoso',
    telepon: '08123456789',
    email: 'budi.santoso@example.com',
    alamat: 'Jl. Sudirman No. 1, Jakarta Selatan'
  },
  {
    id: 2,
    nama: 'Ani Lestari',
    nomorIzinWPB: 'WPB-002/SGB/2023',
    status: 'Aktif',
    kota: 'Jakarta',
    slug: 'ani-lestari',
    telepon: '08234567890',
    email: 'ani.lestari@example.com',
    alamat: 'Jl. Thamrin No. 10, Jakarta Pusat'
  },
  {
    id: 3,
    nama: 'Citra Dewi',
    nomorIzinWPB: 'WPB-003/SGB/2023',
    status: 'Aktif',
    kota: 'Surabaya',
    slug: 'citra-dewi',
    telepon: '08345678901',
    email: 'citra.dewi@example.com',
    alamat: 'Jl. Tunjungan No. 15, Surabaya'
  },
  {
    id: 4,
    nama: 'Doni Pratama',
    nomorIzinWPB: 'WPB-004/SGB/2023',
    status: 'Tidak Aktif',
    kota: 'Bandung',
    slug: 'doni-pratama',
    telepon: '08456789012',
    email: 'doni.pratama@example.com',
    alamat: 'Jl. Dago No. 20, Bandung'
  },
  {
    id: 5,
    nama: 'Eva Wijaya',
    nomorIzinWPB: 'WPB-005/SGB/2023',
    status: 'Aktif',
    kota: 'Medan',
    slug: 'eva-wijaya',
    telepon: '08567890123',
    email: 'eva.wijaya@example.com',
    alamat: 'Jl. Pemuda No. 5, Medan'
  }
];
