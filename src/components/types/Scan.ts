import type { CapacitorBarcodeScannerOptions } from '@capacitor/barcode-scanner'

export namespace ScanModule {
  export type ScanOptions = Pick<CapacitorBarcodeScannerOptions, 'cameraDirection' | 'hint'>
}

export const HintSupportedFormats = [
  { name: 'ALL', value: 17 },
  { name: 'QR_CODE', value: 0 },
  { name: 'AZTEC', value: 1 },
  { name: 'CODABAR', value: 2 },
  { name: 'CODE_39', value: 3 },
  { name: 'CODE_93', value: 4 },
  { name: 'CODE_128', value: 5 },
  { name: 'DATA_MATRIX', value: 6 },
  { name: 'MAXICODE', value: 7 },
  { name: 'ITF', value: 8 },
  { name: 'EAN_13', value: 9 },
  { name: 'EAN_8', value: 10 },
  { name: 'PDF_417', value: 11 },
  { name: 'RSS_14', value: 12 },
  { name: 'RSS_EXPANDED', value: 13 },
  { name: 'UPC_A', value: 14 },
  { name: 'UPC_E', value: 15 },
  { name: 'UPC_EAN_EXTENSION', value: 16 },
]
