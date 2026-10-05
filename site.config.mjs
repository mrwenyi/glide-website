export const site = {
  repository: 'https://github.com/mrwenyi/glide-website',
  url: 'https://mrwenyi.github.io/glide-website/',
  support: 'https://github.com/mrwenyi/glide-website/issues',
  appStore: null,
  updated: '2026-10-06',
  mac: {
    version: '0.1.24',
    tag: 'mac-v0.1.24-preview',
    system: 'macOS 13+',
    file: 'Glide-Mac-0.1.24.pkg',
    bytes: 80754105,
    sha256: 'a35af7b6eab45897e35fca06015e25612a125cd3bca299d3c35d7339e42b7dfc'
  },
  windows: {
    version: '0.2.8',
    tag: 'windows-v0.2.8-preview',
    system: 'Windows 11',
    assets: [
      { architecture: 'x64', file: 'Glide-Windows-x64-0.2.8.zip', sha256: '7e9c2237c5a79edbe2f35ac329ce1381ef9f0e50c0a8e885ea7278020e6b79c0' },
      { architecture: 'ARM64', file: 'Glide-Windows-arm64-0.2.8.zip', sha256: '0b49b338398864ca4813336b194bca8d9d2798e44fed2cada7eb7687895a65ab' }
    ]
  }
};

export const releaseUrl = tag => `${site.repository}/releases/tag/${tag}`;
export const assetUrl = (tag, file) => `${site.repository}/releases/download/${tag}/${file}`;
