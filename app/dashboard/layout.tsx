import { Suspense } from 'react'
import DashboardSkeleton from '../components/DashboardSkeleton'
import Navigation from '../components/Navigation'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return <div> {children} </div>
}

export default DashboardLayout
