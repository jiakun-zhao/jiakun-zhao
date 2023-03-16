import type { Plugin } from 'vite'
import styles from './styles'

export default function (): Plugin[] {
    return [
        styles,
    ]
}
