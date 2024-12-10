export const statusColor = (status: 'applied' | 'interview' | 'hired' | 'declined' | 'accepted') => {
  if (status === 'applied') {
    return '#CDE8BF'
  } else if (status === 'interview') {
    return '#E3D3FB'
  } else if (status === 'hired') {
    return '#6E86FF'
  } else if (status === 'declined') {
    return '#FECFCF'
  } else if (status === 'accepted') {
    return '#CFE4FF'
  }
}
