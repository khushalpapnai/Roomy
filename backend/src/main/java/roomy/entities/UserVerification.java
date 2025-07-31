package roomy.entities;

import jakarta.persistence.*;
import roomy.constants.VerificationStatus;

import java.time.LocalDateTime;

@Entity
@Table(name = "user-verification")
public class UserVerification {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    private User user;
    private String documentUrl;

    @Enumerated(EnumType.STRING)
    private VerificationStatus status = VerificationStatus.PENDING;

    private LocalDateTime submittedAt = LocalDateTime.now();
    private LocalDateTime reviewedAt;

    @ManyToOne private User reviewedBy; // ADMIN only
}
