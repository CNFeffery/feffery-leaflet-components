import { create } from 'zustand';

const useEsriStore = create((set) => ({
    // 记录当前是否有标识服务正在请求中
    identityRequesting: false,
    updateIdentityRequesting: (status) => set((state) => ({ identityRequesting: status }))
}));

export default useEsriStore;