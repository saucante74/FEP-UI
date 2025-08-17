import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RefundResponseDTO } from '../../dtos/refund/refund-response.dto';
import { RefundRequestDTO } from '../../dtos/refund/refund-request.dto';

@Injectable({ providedIn: 'root' })
export class RefundService {
    private readonly apiUrl = '/api/refunds';

    constructor(private http: HttpClient) {}

    getRefunds(): Observable<RefundResponseDTO[]> {
        return this.http.get<RefundResponseDTO[]>(this.apiUrl);
    }

    getRefundsByYear(year: number): Observable<RefundResponseDTO[]> {
        return this.getRefunds().pipe(
            map(refunds =>
                refunds.filter(r => new Date(r.refundDate).getFullYear() === year)
            )
        );
    }

    getMonthlyTotals(year: number): Observable<number[]> {
        return this.getRefundsByYear(year).pipe(
            map(refunds => {
                const totals = Array(12).fill(0);
                refunds.forEach(r => {
                    const m = new Date(r.refundDate).getMonth();
                    totals[m] += r.amount;
                });
                return totals;
            })
        );
    }

    addRefund(payload: RefundRequestDTO): Observable<RefundResponseDTO> {
        return this.http.post<RefundResponseDTO>(this.apiUrl, payload);
    }

    updateRefund(id: number, partial: Partial<RefundResponseDTO>): Observable<RefundResponseDTO> {
        return this.http.put<RefundResponseDTO>(`${this.apiUrl}/${id}`, partial);
    }

    deleteRefund(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
