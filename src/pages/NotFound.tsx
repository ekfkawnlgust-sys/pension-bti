import { PageShell } from '../components/layout/PageShell';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function NotFound() {
  return (
    <PageShell className="flex min-h-[70vh] items-center justify-center">
      <Card className="max-w-xl p-8 text-center">
        <p className="text-sm font-bold text-brand-700">404</p>
        <h1 className="mt-3 text-3xl font-black text-slate-950">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 leading-7 text-slate-600">
          요청하신 주소가 변경되었거나 아직 준비되지 않은 화면입니다.
        </p>
        <div className="mt-8">
          <ButtonLink to="/">홈으로 돌아가기</ButtonLink>
        </div>
      </Card>
    </PageShell>
  );
}
