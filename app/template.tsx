export default function Template({ children}: {
    children: React.ReactNode
}){
    return <div>
        <h2 className="bg-slate-500">Meu template</h2>
        {children}
    </div>
}